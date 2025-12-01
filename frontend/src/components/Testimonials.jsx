import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import './Testimonials.css';

const testimonials = [
    {
        id: 1,
        content: "I really liked this platform. I was able to learn Telugu from basics to advanced, and it increased my confidence in speaking. The simple lessons made it easy to understand.",
        author: "Haritha Reddy",
        role: "BTech Student",
        initial: "H",
        accent: "orange", // Telugu theme
        rating: 5
    },
    {
        id: 2,
        content: "I always had difficulty learning Hindi, but Project Bhaasha made it very easy. With daily practice, my speaking skills have improved a lot.",
        author: "Aman Singh",
        role: "MBA Aspirant",
        initial: "A",
        accent: "yellow", // Hindi theme
        rating: 5
    },
    {
        id: 3,
        content: "From grammar to fluent speaking, this platform helped me build confidence for interviews. The audio lessons and speaking challenges were very helpful!",
        author: "Sneha Joshi",
        role: "Job Seeker",
        initial: "S",
        accent: "red", // English theme
        rating: 5
    },
    {
        id: 4,
        content: "Project Bhaasha made learning Kannada simple and fun. I can now speak confidently with my local friends and understand everyday conversations.",
        author: "Rahul Menon",
        role: "Intern in Bangalore",
        initial: "R",
        accent: "green", // Kannada theme
        rating: 5
    },
    {
        id: 5,
        content: "Learning Tamil was hard for me, but now it's easy with Project Bhaasha. My favorite part is learning through songs – it made the process enjoyable!",
        author: "Divya Lakshmi",
        role: "Student from Kerala",
        initial: "D",
        accent: "blue", // Tamil theme
        rating: 5
    }
];

const Testimonials = () => {
    return (
        <section className="testimonials-wrapper">
            <div className="container-custom">
                <div className="testimonials-header">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="pill-badge"
                    >
                        <Star size={14} className="text-orange-500 fill-orange-500" />
                        <span>Success Stories</span>
                    </motion.div>
                    <h2 className="section-title">What Our Learners Say!</h2>
                    <p className="section-subtitle">Real stories from our community of language enthusiasts.</p>
                </div>

                <div className="testimonials-grid">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`testimonial-card accent-${item.accent}`}
                        >
                            <div className="quote-icon-bg">
                                <Quote size={40} />
                            </div>

                            <div className="card-content">
                                <div className="rating-stars">
                                    {[...Array(item.rating)].map((_, i) => (
                                        <Star key={i} size={16} className="star-filled" />
                                    ))}
                                </div>

                                <p className="testimonial-text">"{item.content}"</p>

                                <div className="author-block">
                                    <div className={`author-avatar bg-${item.accent}`}>
                                        {item.initial}
                                    </div>
                                    <div className="author-info">
                                        <h4>{item.author}</h4>
                                        <p>{item.role}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;