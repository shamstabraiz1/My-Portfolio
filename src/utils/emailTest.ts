// Simple EmailJS test function
import emailjs from '@emailjs/browser'
import { emailjsConfig } from '../config/emailjs'

export const testEmailJS = async () => {
    try {
        // Initialize EmailJS
        emailjs.init(emailjsConfig.publicKey)

        // Simple test parameters
        const testParams = {
            from_name: 'Test User',
            from_email: 'test@example.com',
            subject: 'EmailJS Test',
            message: 'This is a test message from your portfolio.',
            to_email: 'shamstabraizkakar5@gmail.com'
        }

        console.log('Testing EmailJS with config:', {
            serviceID: emailjsConfig.serviceID,
            templateID: emailjsConfig.templateID,
            publicKey: emailjsConfig.publicKey.substring(0, 5) + '...'
        })

        const response = await emailjs.send(
            emailjsConfig.serviceID,
            emailjsConfig.templateID,
            testParams
        )

        console.log('Test successful:', response)
        return { success: true, response }
    } catch (error) {
        console.error('Test failed:', error)
        return { success: false, error }
    }
}