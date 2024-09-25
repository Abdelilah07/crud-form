import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function SignUp() {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        birthDate: '',
        city: '',
        gender: 'female',
        email: '',
        hobbies: [],
        password: '',
        address: ''
    })

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }

    const isValid = () => {
        return formData.firstName.trim() !== ''
        && formData.lastName.trim() !== ''
        && formData.email.trim() !== ''
        && formData.password.trim() !== ''
        && formData.address.trim() !== ''
        && formData.birthDate.trim() !== ''
        && formData.hobbies.length > 0
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        isValid() ? console.log(formData) : alert('Form is not valid');
    }

    return (
        <Form onSubmit={handleSubmit} className='m-5'>
            <Form.Group className="mb-3" controlId="firstName">
                <Form.Label>First name</Form.Label>
                <Form.Control   type="text"
                                placeholder="Enter your first name"
                                value={formData.firstName}
                                name="firstName"
                                onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="lastName">
                <Form.Label>Last name</Form.Label>
                <Form.Control   type="text"
                                placeholder="Enter your last name"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="birthDate">
                <Form.Label>Birth date</Form.Label>
                <Form.Control   type="date"
                                value={formData.birthDate}
                                name="birthDate"
                                onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control   type="email"
                                placeholder="Enter your email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="city">
                <Form.Label>City</Form.Label>
                <Form.Select    value={formData.city}
                                name="city"
                                onChange={handleChange}>
                    <option disabled>Choose your city</option>
                    <option>Agadir</option>
                    <option>Marrakech</option>
                    <option>Casablanca</option>
                </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="gender">
                <Form.Label>Gender</Form.Label>
                {['male', 'female'].map((type) => (
                    <Form.Check
                        key={type}
                        type="radio"
                        id={type}
                        label={type}
                        name="gender"
                        checked={formData.gender === type}
                        onChange={() => setFormData({ ...formData, gender: type })}
                    />
                ))}
            </Form.Group>

            <Form.Group className="mb-3" controlId="hobbies">
                <Form.Label>Hobbies</Form.Label>
                {['Swimming', 'Cooking', 'Dancing', 'Painting', 'Photography', 'Playing Football'].map((type) => (
                    <Form.Check
                        key={type}
                        type="checkbox"
                        id={type}
                        label={type}
                        name="hobbies"
                        checked={formData.hobbies.includes(type)}
                        onChange={() => {
                            if (formData.hobbies.includes(type)) {
                                setFormData({ ...formData, hobbies: formData.hobbies.filter(hobby => hobby !== type) })
                            } else {
                                setFormData({ ...formData, hobbies: [...formData.hobbies, type] })
                            }
                        }}
                    />
                ))}
            </Form.Group>

            <Form.Group className="mb-3" controlId="address">
                <Form.Label>Address</Form.Label>
                <Form.Control   as="textarea"
                                rows={3} placeholder="Enter your address"
                                name="address"
                                value={formData.address}
                                onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control   type="password"
                                placeholder="Password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange} />
            </Form.Group>

            <Button variant="primary"
                    type="submit">
                Submit
            </Button>
        </Form>
    );
}

export default SignUp