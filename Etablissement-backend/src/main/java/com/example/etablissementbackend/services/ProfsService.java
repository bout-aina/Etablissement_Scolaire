package com.example.etablissementbackend.services;



import com.example.etablissementbackend.dtos.ModuleByProfDTO;
import com.example.etablissementbackend.dtos.ProfsDTO;
import com.example.etablissementbackend.entities.Departement;
import com.example.etablissementbackend.entities.Profs;

import java.util.List;

public interface ProfsService {

    ProfsDTO saveProfs(ProfsDTO profsDTO);


    ProfsDTO updateProf(Long idprof,ProfsDTO profsDTO);

    List<ProfsDTO> ListProfs();
    List<Departement> searchDepartement(String keyword);

    List<Integer> nbrProfPourChaqueDep();

    List<ProfsDTO> allprof(String kw);

    List<String> AllDepartement();
    List<ProfsDTO> searchProf(String keyword);
    void deleteProfs(Long ProfsId);
    List<String> searchDetailsProf(Long id);

}
