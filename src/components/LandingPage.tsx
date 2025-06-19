import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
    ArrowRight,
    Shield,
    Zap,
    Globe,
    CheckCircle,
    DollarSign,
    Clock,
    Users,
    BarChart3
} from "lucide-react";
import { Link } from "react-router-dom";

const Landing = () => {
    const features = [
        {
            icon: Zap,
            title: "Lightning Fast Payouts",
            description: "Process payments in seconds with our advanced infrastructure"
        },
        {
            icon: Shield,
            title: "Bank-Grade Security",
            description: "Your data and transactions are protected with enterprise-level encryption"
        },
        // {
        //     icon: Globe,
        //     title: "Lightning Fast Payouts",
        //     description: "Send payouts in seconds"
        // },
        {
            icon: BarChart3,
            title: "Real-time Analytics",
            description: "Track your payment performance with detailed insights and reporting"
        }
    ];

    const stats = [
        { value: "$2.4B+", label: "Total Processed" },
        { value: "150K+", label: "Active Users" },
        { value: "99.9%", label: "Uptime" },
        { value: "200+", label: "Countries" }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
            {/* Header */}
            <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-6">
                        <div className="flex items-center space-x-2">
                            <div className="p-2 bg-blue-600 rounded-lg">
                                <DollarSign className="h-6 w-6 text-white" />
                            </div>
                            <span className="text-2xl font-bold text-gray-900">M-Pay</span>
                        </div>
                        <div className="flex items-center space-x-4">
                            <Button variant="outline" asChild>
                                <Link to="/login">Sign In</Link>
                            </Button>
                            <Button className="bg-blue-600 hover:bg-blue-700" asChild>
                                <Link to="/signup">Get Started</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                        Streamline Your
                        <span className="text-blue-600 block"> Payouts</span>
                    </h1>
                    <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                        The most powerful payout platform for businesses. Send payments,
                        track everything in real-time, and scale your operations with confidence.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6" asChild>
                            <Link to="/signup">
                                Start Free Trial
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                        <Button variant="outline" size="lg" className="text-lg px-8 py-6" asChild>
                            <Link to="/dashboard">
                                View Demo Dashboard
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-gray-600">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Everything you need to manage payouts
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Built for modern businesses that need reliable, fast, and secure payment processing
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <Card key={index} className="border-0 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                                <CardHeader className="text-center">
                                    <div className="mx-auto p-3 bg-blue-100 rounded-lg w-fit mb-4">
                                        <feature.icon className="h-6 w-6 text-blue-600" />
                                    </div>
                                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-center text-gray-600">
                                        {feature.description}
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-indigo-700">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-bold text-white mb-6">
                                Why choose M-Pay?
                            </h2>
                            <div className="space-y-6">
                                {[
                                    "Instant payouts with real-time tracking",
                                    "Advanced fraud protection and compliance",
                                    "24/7 customer support and monitoring",
                                    "Easy integration with existing systems",
                                    "Transparent pricing with no hidden fees"
                                ].map((benefit, index) => (
                                    <div key={index} className="flex items-center space-x-3">
                                        <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                                        <span className="text-white text-lg">{benefit}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                                <CardContent className="p-6 text-center">
                                    <Clock className="h-12 w-12 text-white mx-auto mb-4" />
                                    <div className="text-3xl font-bold text-white mb-2">2 min</div>
                                    <div className="text-white/80">Average payout time</div>
                                </CardContent>
                            </Card>
                            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                                <CardContent className="p-6 text-center">
                                    <Users className="h-12 w-12 text-white mx-auto mb-4" />
                                    <div className="text-3xl font-bold text-white mb-2">10K+</div>
                                    <div className="text-white/80">Happy customers</div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">
                        Ready to streamline your payouts?
                    </h2>
                    <p className="text-xl text-gray-600 mb-8">
                        Join thousands of businesses that trust PayoutVista for their payment needs
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6" asChild>
                            <Link to="/signup">
                                Start Your Free Trial
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                        <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                            Contact Sales
                        </Button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-4 gap-8">
                        <div>
                            <div className="flex items-center space-x-2 mb-4">
                                <div className="p-2 bg-blue-600 rounded-lg">
                                    <DollarSign className="h-5 w-5 text-white" />
                                </div>
                                <span className="text-xl font-bold">M-Pay</span>
                            </div>
                            <p className="text-gray-400">
                                The future of  payment processing, built for modern businesses.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-4">Product</h3>
                            <ul className="space-y-2 text-gray-400">
                                <li>Dashboard</li>
                                <li>Analytics</li>
                                <li>API</li>
                                <li>Security</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-4">Company</h3>
                            <ul className="space-y-2 text-gray-400">
                                <li>About</li>
                                <li>Careers</li>
                                <li>Contact</li>
                                <li>Blog</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-4">Support</h3>
                            <ul className="space-y-2 text-gray-400">
                                <li>Help Center</li>
                                <li>Documentation</li>
                                <li>Status</li>
                                <li>Legal</li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
                        <p>&copy; 2024 M-Pay. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Landing;
