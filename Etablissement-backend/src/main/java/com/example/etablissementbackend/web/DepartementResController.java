package com.example.etablissementbackend.web;

import com.example.etablissementbackend.dtos.DepartementDTO;
import com.example.etablissementbackend.dtos.ProfByDepartementDTO;
import com.example.etablissementbackend.exceptions.DepartementNotFoundExeception;
import com.example.etablissementbackend.services.DepartementService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@Slf4j
@AllArgsConstructor
@CrossOrigin("*")
public class DepartementResController {
    private DepartementService departementService;

    @GetMapping("/departements")
     public List<DepartementDTO> departements(){
         return departementService.listDepartement();

     }
    @GetMapping("/departements/search")
    public List<DepartementDTO> searchCustomers(@RequestParam(name ="keyword",defaultValue = "") String keyword){
        return departementService.searchDepartements("%"+keyword+"%");
    }
     @GetMapping("/departements/{departementId}/listProfs")
     public ProfByDepartementDTO getDepartement(@PathVariable
                                                     Long departementId)  {

      return departementService.getDepartement(departementId);
     }
     @PostMapping("/departements")
     public DepartementDTO saveDepartement(@RequestBody DepartementDTO departementDTO){

        return departementService.saveDepartement(departementDTO);

     }
     @PutMapping("/departements/{departementId}")
     public  DepartementDTO updateDepartement( @PathVariable Long departementId, @RequestBody DepartementDTO departementDTO){
        departementDTO.setId(departementId);
        return departementService.updateDepartement(departementDTO);
     }
      @DeleteMapping("/departement/{id}")
     public void deleteDepartement(@PathVariable Long id){

        departementService.deleteDepartement(id);
     }

}