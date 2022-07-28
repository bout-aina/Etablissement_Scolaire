package com.example.etablissementbackend.dtos;


import lombok.Data;


@Data

public class DepartementDTO {

    private Long id;
    private String Nom_Departement;
    private String chef_Departement;
    private String Description;


}