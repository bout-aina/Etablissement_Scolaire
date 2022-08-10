package com.example.etablissementbackend.web;


import com.example.etablissementbackend.dtos.EtudiantDTO;
import com.example.etablissementbackend.dtos.ProfsDTO;
import com.example.etablissementbackend.entities.Departement;

import com.example.etablissementbackend.services.ProfsService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@Slf4j
@CrossOrigin("*")
public class ProfsRestController {
    private ProfsService profsService;
    @GetMapping("/profs")
    public List<ProfsDTO> profs(){
        return profsService.ListProfs();
    }


    @GetMapping("/departementnames")
    public List<String> AllDepartement(){
        return profsService.AllDepartement();
    }

    @GetMapping("/profs/search")
    public List<ProfsDTO> searchProfs(@RequestParam(name ="keyword",defaultValue = "") String keyword){
        return profsService.allprof("%"+keyword+"%");
    }
    @GetMapping("/profsNbr")
    public List<Integer> nbrProfPourChaqueDep(){
        return profsService.nbrProfPourChaqueDep();
    }
    @GetMapping("/departement/search")
    public List<Departement> searchDep(@RequestParam(name = "keyword",defaultValue = "") String keyword){
        return profsService.searchDepartement("%"+keyword+"%");
    }
    @DeleteMapping("/profs/{id}")
    public void deleteCustomer(@PathVariable Long id){
        profsService.deleteProfs(id);
    }
    @PostMapping("/profs")
    public ProfsDTO saveProf(@RequestBody ProfsDTO profsDTO)  {
        return profsService.saveProfs(profsDTO);
    }

    @GetMapping("/profs/{id}/listModule")
    public List<String> searchDetailsProf(@PathVariable Long id){
        return profsService.searchDetailsProf(id);
    }
    @PutMapping("/profs/{id}")
    public ProfsDTO updateProf(@PathVariable Long id,@RequestBody ProfsDTO profsDTO) {
        return profsService.updateProf(id,profsDTO);
    }

}
