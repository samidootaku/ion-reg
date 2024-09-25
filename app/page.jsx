"use client";
import React, { useState } from "react";
import Hero from "@/components/Hero";
import Office from "@/components/Office";
import Departments from "@/components/Departments";
import Constitution from "@/components/Constitution";
import Footer from "@/components/Footer";
import Modal from "@/components/Modal";
import Button from "@/components/Button"; // Assuming Button is already created

const Home = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleModalToggle = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <>
      <Hero />
      
      <Office />
      <Departments />
      <Constitution />
      <Footer />
      
      

      <Modal isVisible={isModalVisible} onClose={handleModalToggle} />
    </>
  );
};

export default Home;
