import React, { useState } from 'react';
import './register.css';
import axios from 'axios';

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post('http://your-laravel-backend-url/patients', formData);
    console.log('Form submitted successfully:', response.data);
  } catch (error) {
    console.error('Error submitting form:', error);
  }
};


const PatientRegistrationForm = () => {
  const [formData, setFormData] = useState({
    registrationDate: '',
    healthCareNumber: '',
    firstName: '',
    lastName: '',
    sex: '',
    dob: '',
    phoneNumber: '',
    email: '',
    address: '',
    maritalStatus: '',
    isUnder18: false,
    emergencyContact: {
      firstName: '',
      lastName: '',
      relationship: '',
      contactNumber: ''
    },
    familyDoctor: {
      firstName: '',
      lastName: '',
      phoneNumber: ''
    },
    preferredPharmacy: {
      name: '',
      phoneNumber: ''
    },
    healthHistory: '',
    medications: '',
    insurance: {
      company: '',
      id: '',
      policyHolderName: '',
      policyHolderDob: ''
    }
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes('emergencyContact') || name.includes('familyDoctor') || name.includes('preferredPharmacy') || name.includes('insurance')) {
      const [parent, field] = name.split('.');
      setFormData({
        ...formData,
        [parent]: { ...formData[parent], [field]: value }
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // You can later send this data to your backend here
  };

  return (
    <div>
      <h2>New Patient Registration</h2>
      <p>Please fill in the form below</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Registration Date and Time</label>
          <input type="datetime-local" name="registrationDate" value={formData.registrationDate} onChange={handleChange} />
        </div>
        
        <div>
          <label>Health Care Number</label>
          <input type="text" name="healthCareNumber" value={formData.healthCareNumber} onChange={handleChange} placeholder="ex: 23" />
        </div>

        <div>
          <label>Patient Name</label>
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" required />
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" required />
        </div>

        <div>
          <label>Sex</label>
          <select name="sex" value={formData.sex} onChange={handleChange} required>
            <option value="">Please Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label>Date of Birth</label>
          <input type="date" name="dob" value={formData.dob} onChange={handleChange} required />
        </div>

        <div>
          <label>Phone Number</label>
          <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder="(000) 000-0000" required />
        </div>

        <div>
          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="ex: myname@example.com" required />
        </div>

        <div>
          <label>Address</label>
          <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Street Address" required />
        </div>

        <div>
          <label>Marital Status</label>
          <select name="maritalStatus" value={formData.maritalStatus} onChange={handleChange}>
            <option value="">Please Select</option>
            <option value="Single">Single</option>
            <option value="Married">Married</option>
            <option value="Divorced">Divorced</option>
            <option value="Widowed">Widowed</option>
          </select>
        </div>

        <div>
          <label>Is the patient younger than 18?</label>
          <input type="checkbox" name="isUnder18" checked={formData.isUnder18} onChange={() => setFormData({ ...formData, isUnder18: !formData.isUnder18 })} />
        </div>

        <div>
          <label>Emergency Contact</label>
          <input type="text" name="emergencyContact.firstName" value={formData.emergencyContact.firstName} onChange={handleChange} placeholder="First Name" />
          <input type="text" name="emergencyContact.lastName" value={formData.emergencyContact.lastName} onChange={handleChange} placeholder="Last Name" />
          <input type="text" name="emergencyContact.relationship" value={formData.emergencyContact.relationship} onChange={handleChange} placeholder="Relationship" />
          <input type="tel" name="emergencyContact.contactNumber" value={formData.emergencyContact.contactNumber} onChange={handleChange} placeholder="Contact Number" />
        </div>

        <div>
          <label>Family Doctor</label>
          <input type="text" name="familyDoctor.firstName" value={formData.familyDoctor.firstName} onChange={handleChange} placeholder="First Name" />
          <input type="text" name="familyDoctor.lastName" value={formData.familyDoctor.lastName} onChange={handleChange} placeholder="Last Name" />
          <input type="tel" name="familyDoctor.phoneNumber" value={formData.familyDoctor.phoneNumber} onChange={handleChange} placeholder="Phone Number" />
        </div>

        <div>
          <label>Preferred Pharmacy</label>
          <input type="text" name="preferredPharmacy.name" value={formData.preferredPharmacy.name} onChange={handleChange} placeholder="Pharmacy Name" />
          <input type="tel" name="preferredPharmacy.phoneNumber" value={formData.preferredPharmacy.phoneNumber} onChange={handleChange} placeholder="Pharmacy Phone Number" />
        </div>

        <div>
          <label>Health History</label>
          <textarea name="healthHistory" value={formData.healthHistory} onChange={handleChange}></textarea>
        </div>

        <div>
          <label>Medications</label>
          <textarea name="medications" value={formData.medications} onChange={handleChange}></textarea>
        </div>

        <div>
          <label>Insurance Information</label>
          <input type="text" name="insurance.company" value={formData.insurance.company} onChange={handleChange} placeholder="Insurance Company" />
          <input type="text" name="insurance.id" value={formData.insurance.id} onChange={handleChange} placeholder="Insurance ID" />
          <input type="text" name="insurance.policyHolderName" value={formData.insurance.policyHolderName} onChange={handleChange} placeholder="Policy Holder's Name" />
          <input type="date" name="insurance.policyHolderDob" value={formData.insurance.policyHolderDob} onChange={handleChange} placeholder="Date of Birth" />
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default PatientRegistrationForm;

