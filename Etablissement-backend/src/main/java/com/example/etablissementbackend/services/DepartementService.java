package com.example.etablissementbackend.services;



import com.example.etablissementbackend.dtos.DepartementDTO;
import com.example.etablissementbackend.dtos.ModuleByProfDTO;
import com.example.etablissementbackend.dtos.ProfByDepartementDTO;
import com.example.etablissementbackend.exceptions.DepartementNotFoundExeception;

import java.util.List;

public interface DepartementService {

    DepartementDTO saveDepartement(DepartementDTO departementDTO);
    List<DepartementDTO> listDepartement();


    ProfByDepartementDTO getDepartement(Long departementId) ;

    DepartementDTO updateDepartement(DepartementDTO departementDTO);

    void deleteDepartement(Long departementId);

    List<DepartementDTO> searchDepartements(String keyword);


}
