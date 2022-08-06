package com.example.etablissementbackend.mappers;

import com.example.etablissementbackend.dtos.EtudiantDTO;
import com.example.etablissementbackend.dtos.ModuleDTO;
import com.example.etablissementbackend.entities.Etudiant;
import com.example.etablissementbackend.entities.Module;
import com.example.etablissementbackend.entities.Profs;
import com.example.etablissementbackend.repositories.ModuleRepository;
import com.example.etablissementbackend.repositories.ProfsRepository;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class EtudiantMapperImpl {

    public EtudiantDTO fromEtudiant(Etudiant etudiant)
    {
        EtudiantDTO etudiantDTO = new EtudiantDTO();
        etudiantDTO.setId(etudiant.getId());
        etudiantDTO.setNom(etudiant.getNom());
        etudiantDTO.setAdresse(etudiant.getAdresse());
        etudiantDTO.setTelper(etudiant.getTelper());
        etudiantDTO.setTelpar(etudiant.getTelpar());
        etudiantDTO.setMail(etudiant.getMail());
        etudiantDTO.setSex(etudiant.getSex());
        etudiantDTO.setEtat(etudiant.getEtat());
        etudiantDTO.setImage(etudiant.getImage());
        etudiantDTO.setNom_departement(etudiant.getDepartement().getNomdep());



        return  etudiantDTO;
    }

}
