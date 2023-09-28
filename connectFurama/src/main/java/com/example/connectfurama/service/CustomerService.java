package com.example.connectfurama.service;

import com.example.connectfurama.model.Customers;
import com.example.connectfurama.repository.ICustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class CustomerService implements ICustomerService{
    @Autowired
    ICustomerRepository customerRepository;
    @Override
    public Page<Customers> getAll(Pageable pageable, String searchName) {
        return customerRepository.getAllCustomerByName(searchName, pageable);
    }

    @Override
    public void addCustomer(Customers customers) {
        customerRepository.save(customers);
    }

}
