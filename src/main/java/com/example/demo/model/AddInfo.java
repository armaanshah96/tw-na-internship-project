package com.example.demo.model;

import javax.persistence.*;

@Entity
@Table(name = "add_info")
public class AddInfo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @ManyToOne
    @JoinColumn(name = "kyr.id")
    KYR kyr;

    String text;

    public AddInfo() {}

    public long getId() {
        return id;
    }

    public String getText() {
        return text;
    }
}
