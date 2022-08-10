package com.example.etablissementbackend.services;



import com.example.etablissementbackend.dtos.DepartementDTO;
import com.example.etablissementbackend.dtos.ModuleByProfDTO;
import com.example.etablissementbackend.dtos.ProfByDepartementDTO;
import com.example.etablissementbackend.entities.Departement;
import com.example.etablissementbackend.exceptions.DepartementNotFoundExeception;

import java.util.List;

public interface DepartementService {

    DepartementDTO saveDepartement(DepartementDTO departementDTO);
    List<DepartementDTO> listDepartement();


    ProfByDepartementDTO getDepartement(Long departementId) ;

    Departement updateDepartement(Long id, Departement departement);

    void deleteDepartement(Long departementId);

    List<DepartementDTO> searchDepartements(String keyword);

    List<DepartementDTO> alldeps(String kw);

    public List<String> getEtdOfDep(Long id);
    public List<String> getProfOfDep(Long id);


}
