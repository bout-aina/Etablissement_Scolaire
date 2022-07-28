package com.example.etablissementbackend;

import com.example.etablissementbackend.entities.Departement;
import com.example.etablissementbackend.entities.Module;
import com.example.etablissementbackend.repositories.DepartementRepository;
import com.example.etablissementbackend.repositories.ModuleRepository;
import com.example.etablissementbackend.repositories.ProfsRepository;
import com.example.etablissementbackend.services.EtablissementService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.stream.Stream;

@SpringBootApplication
public class EtablissementBackendApplication {

    public static void main(String[] args) {

        SpringApplication.run(EtablissementBackendApplication.class, args);
    }
//@Bean
    CommandLineRunner commandLineRunner(EtablissementService etablissementService)
{
    return args -> {


           etablissementService.moduleList();



    };
}
}
