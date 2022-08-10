package com.example.etablissementbackend.services;

import com.example.etablissementbackend.dtos.ModuleDTO;
import com.example.etablissementbackend.entities.Module;
import com.example.etablissementbackend.entities.Profs;
import com.example.etablissementbackend.exceptions.ModuleNotFoundException;
import com.example.etablissementbackend.mappers.EtablissementMapperImpl;
import com.example.etablissementbackend.repositories.ModuleRepository;
import com.example.etablissementbackend.repositories.ProfsRepository;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
@AllArgsConstructor
@Slf4j
public class EtablissementServiceImpl implements EtablissementService {
    private ModuleRepository moduleRepository;
    private ProfsRepository profsRepository;
    private EtablissementMapperImpl dtoMapper;


    @Override
    public ModuleDTO saveModule(ModuleDTO moduleDTO) {
        List<Profs> profsList = profsRepository.findAll();

        Profs profs;
        for (Profs p : profsList) {
            if (p.getNom_Complet().equals(moduleDTO.getNomProf())) {
                profs = profsRepository.findById(p.getId()).orElse(null);
                Module module = new Module();

                module.setNom(moduleDTO.getNom());
                module.setCoeff(moduleDTO.getCoeff());
                module.setTaux_horraire(moduleDTO.getTaux_horraire());
                module.setProfs(profs);
                Module savedBankAccount = moduleRepository.save(module);
                return dtoMapper.fromModule(savedBankAccount);
            }
        }


        return null;


    }
    @Override
    public ModuleDTO updateModule(Long idmodule, ModuleDTO moduleDTO)  {


        List<Profs> profsList = profsRepository.findAll();

        Profs profs;
        for (Profs p : profsList) {
            if (p.getNom_Complet().equals(moduleDTO.getNomProf())) {
                profs = profsRepository.findById(p.getId()).orElse(null);
                Module module = moduleRepository.findById(idmodule).orElse(null);
                module.setNom(moduleDTO.getNom());
                module.setCoeff(moduleDTO.getCoeff());
                module.setTaux_horraire(moduleDTO.getTaux_horraire());
                module.setProfs(profs);
                Module savedBankAccount = moduleRepository.save(module);
                return dtoMapper.fromModule(savedBankAccount);
            }
        }


        return null;


    }

    @Override
    public List<ModuleDTO> moduleList() {
        List<Module> modules = moduleRepository.findAll();
        List<ModuleDTO> moduleDTOS =
                modules.stream()
                        .map(module -> dtoMapper.fromModule(module))
                        .collect(Collectors.toList());


        return moduleDTOS;
    }
    @Override
    public List<ModuleDTO> allmodules(String kw) {
        if (kw == null)
        {
            List<Module> modules = moduleRepository.findAll();
            List<ModuleDTO> moduleDTOS =
                    modules.stream()
                            .map(module -> dtoMapper.fromModule(module))
                            .collect(Collectors.toList());


            return moduleDTOS;
        }
        else{

            List<Module> etds = moduleRepository.allmodules(kw);
            List<ModuleDTO> etudiantDTOS =
                    etds.stream()
                            .map(module -> dtoMapper.fromModule(module))
                            .collect(Collectors.toList());

            return etudiantDTOS;
        }

    }
    @Override
    public ModuleDTO getModule(Long moduleId) throws ModuleNotFoundException {
        Module module = moduleRepository.findById(moduleId)
                .orElseThrow(() -> new ModuleNotFoundException("Module not found"));
        return dtoMapper.fromModule(module);
    }

    @Override
    public void deleteModule(Long moduleId) {
        moduleRepository.deleteById(moduleId);
    }

    @Override
    public List<ModuleDTO> searchModules(String keyword) {
        List<Module> modules = moduleRepository.searchModule(keyword);
        List<ModuleDTO> moduleDTOS = modules.stream().map(mod -> dtoMapper.fromModule(mod)).collect(Collectors.toList());
        return moduleDTOS;
    }



    @Override
    public  List<String> GetprofByName()
    {    List<Profs> profsList = profsRepository.findAll();
        List<String> nomProfs = new ArrayList<>();
        for (Profs p : profsList) {
            nomProfs.add(p.getNom_Complet());
        }
       return nomProfs;
    }

}