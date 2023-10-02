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
    public Page<Customers> getAll(Pageable pageable, String searchName, String type) {
        return customerRepository.findCustomerByNameContainingAndCustomerTypeID(pageable, searchName, type);
    }

    @Override
    public void addCustomer(Customers customers) {
        customerRepository.save(customers);
    }

    @Override
    public void deleteCustomer(Integer id) {
        customerRepository.deleteById(id);
    }

    @Override
    public Customers findById(Integer id) {
        return customerRepository.findById(id).get();
    }

}
