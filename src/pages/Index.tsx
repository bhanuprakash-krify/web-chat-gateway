import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";
import { MessageCircle, Sparkles, Zap } from "lucide-react";

const Index = () => {
  const handleStartChat = () => {
    // This will be where the chatbot integration happens
    console.log("Starting chat...");
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/10" />
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-6xl md:text-7xl font-bold leading-tight">
                Welcome to{" "}
                <span className="gradient-text">
                  ChatGateway
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Your intelligent conversation hub is ready. Connect, communicate, and discover new possibilities.
              </p>
            </div>
            
            <div className="flex justify-center">
              <Button 
                variant="hero" 
                size="lg" 
                onClick={handleStartChat}
                className="group"
              >
                <MessageCircle className="w-6 h-6 mr-2 group-hover:animate-pulse" />
                Start Conversation
                <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform duration-300" />
              </Button>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-20 opacity-60">
          <div className="w-4 h-4 bg-primary rounded-full animate-pulse" />
        </div>
        <div className="absolute top-40 right-32 opacity-40">
          <div className="w-6 h-6 bg-primary-glow rounded-full animate-bounce" />
        </div>
        <div className="absolute bottom-32 left-1/4 opacity-50">
          <div className="w-3 h-3 bg-primary rounded-full animate-ping" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Ready for Integration</h2>
            <p className="text-xl text-muted-foreground">
              Built with modern architecture for seamless chatbot integration
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="chat-container p-8 text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <MessageCircle className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Chat Ready</h3>
              <p className="text-muted-foreground">
                Pre-built with modern chat interface components and styling
              </p>
            </div>

            <div className="chat-container p-8 text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Fast & Responsive</h3>
              <p className="text-muted-foreground">
                Optimized performance with beautiful animations and interactions
              </p>
            </div>

            <div className="chat-container p-8 text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <Sparkles className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Beautiful Design</h3>
              <p className="text-muted-foreground">
                Carefully crafted design system ready for your chatbot integration
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-surface-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to add your chatbot?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            This website is perfectly prepared for chatbot integration with beautiful styling and responsive design.
          </p>
          <Button variant="default" size="lg" onClick={handleStartChat}>
            <MessageCircle className="w-5 h-5 mr-2" />
            Test Integration
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;