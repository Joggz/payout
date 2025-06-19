import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAppStore } from '../store';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from '@/hooks/use-toast';
import { Building2, ArrowLeft } from 'lucide-react';

const BusinessSignupForm = () => {
    const [formData, setFormData] = useState({

        email: "info@techhub.com",
        password: "SecurePass123!",
        confirmPassword: "SecurePass123!",
        name: "Ada Obi",
        businessName: "Tech Hub Solutions",
        phone: "+2348012345678",
        address: "12A Herbert Macaulay Way, Lagos",

        // email: '',
        // password: '',
        // confirmPassword: '',
        // name: '',
        // businessName: '',
        // address: '',
        // // firstName: '',
        // // lastName: '',
        // phone: "",
    });
    const [isLoading, setIsLoading] = useState(false);
    const registerBusiness = useAppStore((state) => state.registerBusiness);
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        console.log(formData);
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            toast({
                title: "Password Mismatch",
                description: "Passwords do not match",
                variant: "destructive",
            });
            return;
        }

        if (formData.password.length < 6) {
            toast({
                title: "Password Too Short",
                description: "Password must be at least 6 characters long",
                variant: "destructive",
            });
            return;
        }

        setIsLoading(true);

        const payload = {
                email: "info@techhub.com",
                password: "SecurePass123!",
                contact_name: "Ada Obi",
                businessName: "Tech Hub Solutions",
                phone: "+2348012345678",
                address: "12A Herbert Macaulay Way, Lagos",
            }

        try {
            // const success = await registerBusiness(payload);
            const success = await registerBusiness({
               email: formData.email,
               password: formData.password,
               contact_name: formData.name,
                business_name: formData.businessName,
                phone: formData.phone,
                address: formData.address,
            });

            if (success) {
                toast({
                    title: "Registration successful",
                    description: "Welcome to the admin dashboard!",
                });
                navigate('/dashboard');
            } else {
                toast({
                    title: "Registration failed",
                    description: "Email already exists or registration failed",
                    variant: "destructive",
                });
            }
        } catch (error) {
            toast({
                title: "Error",
                description: "An error occurred during registration",
                variant: "destructive",
            });
        } finally {
            setIsLoading(false);
        }
    };

    const handleInputChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({ ...prev, [field]: e.target.value }));
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
            <Card className="w-full max-w-md">
                <CardHeader className="space-y-1">
                    <div className="flex items-center justify-between">
                        <Link
                            to="/login"
                            className="text-gray-500 hover:text-gray-700 transition-colors"
                        >
                            <ArrowLeft className="h-5 w-5" />
                        </Link>
                        <Building2 className="h-8 w-8 text-blue-600" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-center">Business Registration</CardTitle>
                    <p className="text-gray-600 text-center text-sm">
                        Create your business account to access the dashboard
                    </p>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="businessName">Business Name</Label>
                            <Input
                                id="businessName"
                                type="text"
                                required
                                value={formData.businessName}
                                onChange={handleInputChange('businessName')}
                                placeholder="Your Business Name"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="name">Full Name</Label>
                            <Input
                                id="name"
                                type="text"
                                required
                                value={formData.name}
                                onChange={handleInputChange('name')}
                                placeholder="Your Full Name"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="email">Email Address</Label>
                            <Input
                                id="email"
                                type="email"
                                required
                                value={formData.email}
                                onChange={handleInputChange('email')}
                                placeholder="business@example.com"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="phone">Phone</Label>
                            <Input
                                id="phone"
                                type="number"
                                inputMode="numeric"
                                pattern="[0-9]*"
                                required
                                value={formData.phone}
                                onChange={handleInputChange('phone')}
                                placeholder="090483838539"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="address"> Address</Label>
                            <Input
                                id="address"
                                type="text"
                                required
                                value={formData.address}
                                onChange={handleInputChange('address')}
                                placeholder="Lagos, Nigeria"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="password">Password</Label>
                            <Input
                                id="password"
                                type="password"
                                required
                                value={formData.password}
                                onChange={handleInputChange('password')}
                                placeholder="Minimum 6 characters"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="confirmPassword">Confirm Password</Label>
                            <Input
                                id="confirmPassword"
                                type="password"
                                required
                                value={formData.confirmPassword}
                                onChange={handleInputChange('confirmPassword')}
                                placeholder="Confirm your password"
                            />
                        </div>

                        <Button
                            type="submit"
                            disabled={isLoading}
                            className="w-full"
                        >
                            {isLoading ? 'Creating Account...' : 'Create Business Account'}
                        </Button>
                    </form>

                    <div className="mt-6 text-center">
                        <p className="text-sm text-gray-600">
                            Already have an account?{' '}
                            <Link
                                to="/login"
                                className="text-blue-600 hover:text-blue-500 font-medium"
                            >
                                Sign in here
                            </Link>
                        </p>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default BusinessSignupForm;
