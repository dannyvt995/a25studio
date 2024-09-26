"use client"
import React from 'react'
import HeroSection from '@Modules/HeroSection'
import ServiceSection from '@Modules/ServiceSection'
import ClientSection from '@Modules/ClientSection'
import StepSection from '@Modules/StepSection'
import PriceSection from '@Modules/PriceSection'
import HightlightSection from '@Modules/HightlightSection'
import ContactSection from '@Modules/ContactSection'

export default function index() {

    return (
        <>
            <HeroSection />
            <ClientSection />
            <ServiceSection/>
            <StepSection />
            <HightlightSection />
            <PriceSection />
          
            <ContactSection />
        </>
    )
}
