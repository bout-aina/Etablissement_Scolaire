package com.example.etablissementbackend.dtos;


import lombok.Data;


@Data

public class DepartementDTO {

    private Long id;
    private String nomdep;
    private String chef;
    private String description;


}