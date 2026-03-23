import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Instagram, Trophy } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import profileImage from '@/assets/profile.png';

const socialLinks = [
  { icon: Github, href: 'https://github.com/Tejasava', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/tejasava-singh-yadav-ba8818274', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://x.com/Tejasava_Yadav', label: 'X (Twitter)' },
  { icon: Instagram, href: 'https://www.instagram.com/tejasavasinghyadav', label: 'Instagram' },
  { icon: Trophy, href: 'https://unstop.com/u/tejasyad7508', label: 'Unstop' },
];

const HeroSection = () => {
  const [isHovering, setIsHovering] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Preload video on component mount
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true; // Mute initially to allow autoplay
      video.load();
    }
  }, []);

  const scrollTo = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      
      // Play video immediately on hover (muted first to allow autoplay)
      const play = async () => {
        try {
          videoRef.current!.muted = true;
          await videoRef.current!.play();
          // Unmute immediately after playing starts
          videoRef.current!.muted = false;
        } catch (error) {
          console.error('Autoplay failed:', error);
          // User can click to play manually
        }
      };
      
      play();
    }
  };

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.muted = false;
        videoRef.current.play().catch((error) => {
          console.error('Play failed:', error);
        });
      } else {
        videoRef.current.pause();
      }
    }
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-24 pb-12">
      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl"
      >
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold font-display gradient-text animate-glow mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          TEJASAVA SINGH YADAV
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl lg:text-2xl text-muted-foreground tracking-widest mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          AI/ML PROFESSIONAL | ENTREPRENEUR | INNOVATOR
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.button
            whileHover={{ y: -3, boxShadow: '0 0 50px hsl(var(--glow) / 0.5), 0 0 80px hsl(var(--glow-purple) / 0.3)' }}
            whileTap={{ scale: 0.98 }}
            onClick={() => scrollTo('#projects')}
            className="px-8 py-4 rounded-full font-semibold text-primary-foreground glow-effect"
            style={{ background: 'var(--gradient-primary)' }}
          >
            View My Work
          </motion.button>
          <motion.button
            whileHover={{ y: -3, boxShadow: '0 0 30px hsl(var(--glow) / 0.3)' }}
            whileTap={{ scale: 0.98 }}
            onClick={() => scrollTo('#contact')}
            className="px-8 py-4 rounded-full font-semibold border-2 border-primary text-foreground hover:bg-primary/10 transition-colors"
          >
            Get In Touch
          </motion.button>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          className="flex gap-4 justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {socialLinks.map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, scale: 1.1, boxShadow: '0 0 30px hsl(var(--glow) / 0.4)' }}
              className="w-14 h-14 rounded-full glass-card border-2 border-primary flex items-center justify-center text-primary hover:text-primary-foreground transition-all duration-300"
              style={{ 
                background: 'transparent',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--gradient-primary)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
              }}
              title={social.label}
            >
              <social.icon size={24} />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Profile Image with Video Hover */}
      <motion.div
        className="mt-16 flex flex-col items-center justify-center"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3, type: 'spring', stiffness: 100 }}
      >
        <motion.div 
          className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden cursor-pointer relative group flex items-center justify-center"
          whileHover={{ 
            boxShadow: '0 0 80px hsl(var(--glow) / 0.6), 0 0 150px hsl(var(--glow-purple) / 0.4)',
            scale: 1.08
          }}
          transition={{ duration: 0.3 }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Profile Image */}
          <img
            src={profileImage}
            alt="Tejasava Singh Yadav"
            className={`w-full h-full object-cover transition-opacity duration-300 ${
              isHovering ? 'opacity-0' : 'opacity-100'
            }`}
          />
          
          {/* Introduction Video */}
          <video
            ref={videoRef}
            className={`absolute w-full h-full object-cover transition-opacity duration-300 cursor-pointer ${
              isHovering ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              filter: 'brightness(1.1) contrast(1.1)',
              mixBlendMode: 'screen'
            }}
            loop
            muted={false}
            playsInline
            preload="metadata"
            crossOrigin="anonymous"
            onClick={handleVideoClick}
            onError={(e) => {
              console.error('Video error:', e);
            }}
          >
            <source src="/intro-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>

        {/* Hover Guide Text - Below the circular frame */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-6 text-center"
        >
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-base md:text-lg font-semibold text-primary"
          >
            ↑ Hover to see intro ↑
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
