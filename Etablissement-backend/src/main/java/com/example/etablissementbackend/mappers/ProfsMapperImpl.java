package com.example.etablissementbackend.mappers;


import com.example.etablissementbackend.dtos.ProfsDTO;
import com.example.etablissementbackend.entities.Departement;
import com.example.etablissementbackend.entities.Profs;
import com.example.etablissementbackend.repositories.DepartementRepository;
import com.example.etablissementbackend.repositories.ProfsRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service

public class ProfsMapperImpl {
    public ProfsDTO fromProfs(Profs profs)
    {
        DepartementRepository departementRepository;
        ProfsDTO profsDTO=new ProfsDTO();
        profsDTO.setId(profs.getId());
        profsDTO.setNom_complet(profs.getNom_Complet());
        profsDTO.setMail(profs.getMail());
        profsDTO.setTel(profs.getTel());
        profsDTO.setAdresse(profs.getAdresse());
        profsDTO.setNom_departement(profs.getDepartement().getNomdep());
        return profsDTO;

    }
  public Profs fromProfsDTO(ProfsDTO profsdto)
    {
        DepartementRepository departementRepository = null;
        ProfsRepository profsRepository;
        Profs profs=new Profs();
        profs.setId(profsdto.getId());
        profs.setNom_Complet(profsdto.getNom_complet());
        profs.setMail(profsdto.getMail());
        profs.setTel(profsdto.getTel());
        profs.setAdresse(profsdto.getAdresse());
        List<Departement> dep= departementRepository.searchDepartement("%"+profsdto.getNom_departement()+"%");
        profs.setDepartement(dep.get(0));
        return profs;
    }
}
