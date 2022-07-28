package com.example.etablissementbackend.mappers;

import com.example.etablissementbackend.dtos.DepartementDTO;
import com.example.etablissementbackend.entities.Departement;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

@Service
public class DeparMapperImpl {
    public DepartementDTO fromDepartement(Departement departement){
        DepartementDTO departementDTO=new DepartementDTO();
        BeanUtils.copyProperties(departement,departementDTO);
        return departementDTO;
    }
    public Departement fromDepartementDTO(DepartementDTO departementDTO){
        Departement departement=new Departement();
        BeanUtils.copyProperties(departementDTO,departement);
        return departement;

    }
}
