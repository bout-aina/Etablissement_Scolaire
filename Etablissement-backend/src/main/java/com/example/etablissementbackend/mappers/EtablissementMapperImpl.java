package com.example.etablissementbackend.mappers;

import com.example.etablissementbackend.dtos.ModuleDTO;
import com.example.etablissementbackend.dtos.ProfsDTO;
import com.example.etablissementbackend.entities.Departement;
import com.example.etablissementbackend.entities.Module;
import com.example.etablissementbackend.entities.Profs;
import com.example.etablissementbackend.repositories.DepartementRepository;
import com.example.etablissementbackend.repositories.ModuleRepository;
import com.example.etablissementbackend.repositories.ProfsRepository;
import com.fasterxml.jackson.databind.util.BeanUtil;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EtablissementMapperImpl {
    public ModuleDTO fromModule(Module module)
    {
        ModuleDTO moduleDTO = new ModuleDTO();

        moduleDTO.setId(module.getId());
        moduleDTO.setNom(module.getNom());
        moduleDTO.setCoeff(module.getCoeff());
        moduleDTO.setTaux_horraire(module.getTaux_horraire());
        moduleDTO.setNomProf(module.getProfs().getNom_Complet());
        return  moduleDTO;
    }
    public Module fromModuleDTO(ModuleDTO moduleDTO)
    {
        ProfsRepository profsRepository = null;
        ModuleRepository moduleRepository;
        Module module=new Module();
        module.setId(moduleDTO.getId());
        module.setNom(moduleDTO.getNom());
        module.setCoeff(moduleDTO.getCoeff());
        module.setTaux_horraire(moduleDTO.getTaux_horraire());

        List<Profs> dep= profsRepository.searchProf("%"+moduleDTO.getNomProf()+"%");
        module.setProfs(dep.get(0));

        return module;
    }

}
