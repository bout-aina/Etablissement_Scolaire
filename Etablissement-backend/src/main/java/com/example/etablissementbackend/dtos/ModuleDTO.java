package com.example.etablissementbackend.dtos;

import com.example.etablissementbackend.entities.Profs;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data

public  class ModuleDTO {
        private Long id;
        private String nom;
        private String coeff;
        private String taux_horraire;
        private String nomProf;
    }

