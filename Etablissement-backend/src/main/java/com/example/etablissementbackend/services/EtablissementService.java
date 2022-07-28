package com.example.etablissementbackend.services;

import com.example.etablissementbackend.dtos.ModuleDTO;
import com.example.etablissementbackend.entities.Module;
import com.example.etablissementbackend.exceptions.ModuleNotFoundException;
import com.example.etablissementbackend.exceptions.ProfsNotFoundException;
import com.sun.org.apache.xpath.internal.operations.Mod;

import java.util.List;

public interface EtablissementService {

    ModuleDTO getModule(Long moduleId) throws ModuleNotFoundException;

    ModuleDTO saveModule(ModuleDTO moduleDTO) ;

    List<ModuleDTO> moduleList();

    void deleteModule(Long moduleId);

    List<ModuleDTO> searchModules(String keyword);

    ModuleDTO updateModule(Long idmodule,ModuleDTO moduleDTO) ;

    List<String> GetprofByName();
}
