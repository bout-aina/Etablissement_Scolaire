package com.example.etablissementbackend.entities;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Departement {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String Nom_Departement;
    private String chef_Departement;
    private String Description;


    @OneToMany(mappedBy = "departement",fetch = FetchType.LAZY)
    private List<Profs> profs;


}
