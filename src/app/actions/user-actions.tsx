// app/action/user-action.ts
"use server"

export async function createUser(prevState: any, formData: FormData) {
    'use server'

    const user = {
        name: formData.get('name'),
        bio: formData.get('bio'),
        email: formData.get('email'),
        password: formData.get('password'),
    }

    const response = await fetch('http://localhost:8080/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    })

    if (!response.ok) {
        return {
            success: false,
            name: user.name,
            bio: user.bio,
            email: user.email,
            password: user.password,
        }
    }

    return {
        success: true,
        name: '',
        bio: '',
        email: '',
        password: '',
    }

}