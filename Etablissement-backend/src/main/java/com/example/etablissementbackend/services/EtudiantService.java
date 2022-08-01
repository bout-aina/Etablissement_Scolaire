package com.example.etablissementbackend.services;

import com.example.etablissementbackend.dtos.EtudiantDTO;
import com.example.etablissementbackend.dtos.ModuleDTO;
import com.example.etablissementbackend.dtos.ProfsDTO;
import com.example.etablissementbackend.entities.Departement;
import com.example.etablissementbackend.exceptions.EtudiantNotFoundException;
import com.example.etablissementbackend.exceptions.ModuleNotFoundException;

import java.util.List;

public interface EtudiantService {


    EtudiantDTO saveEtd(EtudiantDTO etudiantDTO);




    EtudiantDTO updateEtd(Long idetd, EtudiantDTO etudiantDTO);


    void deleteEtd(Long idetd);

    EtudiantDTO getEtd(Long etdId) throws EtudiantNotFoundException;

    List<EtudiantDTO> etudiantlist();
}
