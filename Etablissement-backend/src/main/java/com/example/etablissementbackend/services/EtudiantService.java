package com.example.etablissementbackend.services;

import com.example.etablissementbackend.dtos.EtudiantDTO;
import com.example.etablissementbackend.exceptions.EtudiantNotFoundException;

import java.util.List;

public interface EtudiantService {


    List<EtudiantDTO> alletd(String kw);

    List<Integer> nbrEtdPourChaqueDep();



    List<Integer> pourcentage();

    EtudiantDTO saveEtd(EtudiantDTO etudiantDTO);




    EtudiantDTO updateEtd(Long idetd, EtudiantDTO etudiantDTO);


    void deleteEtd(Long idetd);

    EtudiantDTO getEtd(Long etdId) throws EtudiantNotFoundException;

    List<EtudiantDTO> etudiantlist();
}
