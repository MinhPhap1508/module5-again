package com.example.connectfurama.controller;

import com.example.connectfurama.model.Customers;
import com.example.connectfurama.model.Type;
import com.example.connectfurama.service.ICustomerService;
import com.example.connectfurama.service.ITypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("customers")
public class CustomerController {
    @Autowired
    ICustomerService customerService;
    @Autowired
    ITypeService typeService;

    @GetMapping("")
    public ResponseEntity<Page<Customers>> getList(@RequestParam("_page") int page,
                                                   @RequestParam("_limit") int size,
                                                   @RequestParam("fullName_like") String name) {
        Pageable pageable = PageRequest.of(page, size);
        Page<Customers> customersPage = customerService.getAll(pageable, name);
        if (customersPage.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(customersPage, HttpStatus.OK);
        }
    }

    @GetMapping("type")
    public ResponseEntity<List<Type>> getType() {
        List<Type> typeList = typeService.getAllType();
        if (typeList.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(typeList, HttpStatus.OK);
    }

    @PostMapping("")
    public ResponseEntity<Customers> addCustomer(@RequestBody Customers customers) {
        customerService.addCustomer(customers);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }
}
