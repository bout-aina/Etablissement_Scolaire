package com.example.etablissementbackend.services;

import com.example.etablissementbackend.dtos.EtudiantDTO;
import com.example.etablissementbackend.dtos.ModuleDTO;
import com.example.etablissementbackend.entities.*;
import com.example.etablissementbackend.exceptions.EtudiantNotFoundException;
import com.example.etablissementbackend.exceptions.ModuleNotFoundException;
import com.example.etablissementbackend.mappers.EtudiantMapperImpl;
import com.example.etablissementbackend.repositories.DepartementRepository;
import com.example.etablissementbackend.repositories.EtudiantRepository;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
@AllArgsConstructor
@Slf4j
public class EtudiantServiceImpl implements EtudiantService{
    private EtudiantRepository etudiantRepository;
    private DepartementRepository departementRepository;
    private EtudiantMapperImpl dtoMapper;


    @Override
    public List<EtudiantDTO> etudiantlist() {
        List<Etudiant> modules = etudiantRepository.findAllByOrderByNomAsc();
        List<EtudiantDTO> moduleDTOS =
                modules.stream()
                        .map(module -> dtoMapper.fromEtudiant(module))
                        .collect(Collectors.toList());


        return moduleDTOS;
    }

    @Override
    public EtudiantDTO saveEtd(EtudiantDTO etudiantDTO) {
        List<Departement> deplist=departementRepository.findAll();
        Departement dep;
        for (Departement d:deplist)
        {
            if(d.getNom_Departement().equals(etudiantDTO.getNom_departement()))
            {
                dep=departementRepository.findById(d.getId()).orElse(null);
                Etudiant etudiant = new Etudiant();
                etudiant.setNom(etudiantDTO.getNom());
                etudiant.setAdresse(etudiantDTO.getAdresse());
                etudiant.setTelper(etudiantDTO.getTelper());
                etudiant.setTelpar(etudiantDTO.getTelpar());
                etudiant.setMail(etudiantDTO.getMail());
                etudiant.setSex(etudiantDTO.getSex());
                etudiant.setEtat(etudiantDTO.getEtat());
                etudiant.setImage(etudiantDTO.getImage());
                etudiant.setDepartement(dep);
                Etudiant savedetd = etudiantRepository.save(etudiant);
                return dtoMapper.fromEtudiant(savedetd);
            }
        }
        return null;
    }
    @Override
    public EtudiantDTO getEtd(Long etdId) throws EtudiantNotFoundException {
        Etudiant etudiant = etudiantRepository.findById(etdId)
                .orElseThrow(() -> new EtudiantNotFoundException("Etudiant not found"));
        return dtoMapper.fromEtudiant(etudiant);
    }

    @Override
    public EtudiantDTO updateEtd(Long idetd, EtudiantDTO etudiantDTO) {
        List<Departement> deplist=departementRepository.findAll();
        Departement dep;
        for (Departement d:deplist)
        {
            if(d.getNom_Departement().equals(etudiantDTO.getNom_departement()))
            {
                dep=departementRepository.findById(d.getId()).orElse(null);
                Etudiant etudiant = etudiantRepository.findById(idetd).orElse(null);
                etudiant.setNom(etudiantDTO.getNom());
                etudiant.setAdresse(etudiantDTO.getAdresse());
                etudiant.setTelper(etudiantDTO.getTelper());
                etudiant.setTelpar(etudiantDTO.getTelpar());
                etudiant.setMail(etudiantDTO.getMail());
                etudiant.setImage(etudiantDTO.getImage());
                etudiant.setSex(etudiantDTO.getSex());
                etudiant.setEtat(etudiantDTO.getEtat());
                etudiant.setDepartement(dep);
                Etudiant savedetd = etudiantRepository.save(etudiant);
                return dtoMapper.fromEtudiant(savedetd);
            }
        }
        return null;
    }

    @Override
    public void deleteEtd(Long idetd) {
etudiantRepository.deleteById(idetd);
    }


}
