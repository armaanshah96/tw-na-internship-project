package com.example.demo.model;

import javax.persistence.*;
import java.util.Objects;

/*
Key concepts: @Entity in Spring

CHECKPOINT: What does @Entity do in the application? How is it used?

To go over together: How this class is used
 */


@Entity
public class Cat {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    String name;
    String color;
    int grumpiness;

    public Cat(String name, String color, int grumpiness) {
        this.name = name;
        this.color = color;
        this.grumpiness = grumpiness;
    }

    public Cat() {}

    public long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getColor() {
        return color;
    }

    public int getGrumpiness() {
        return grumpiness;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Cat cat = (Cat) o;
        return id == cat.id && grumpiness == cat.grumpiness && name.equals(cat.name) && color.equals(cat.color);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, color, grumpiness);
    }
}
