package com.example.connectfurama.service;

import com.example.connectfurama.model.Customers;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface ICustomerService {
Page<Customers> getAll (Pageable pageable, String name, String type);
void addCustomer (Customers customers);
void deleteCustomer (Integer id);
Customers findById (Integer id);
}
