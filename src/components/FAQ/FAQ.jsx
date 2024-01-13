'use client';
import React, {useState} from 'react';
import FAQData from '../../Data/faq-data.json';

function Faq(props) {
    const {
        title, colorTitle, categories
    } = FAQData;

    const categoryNames = Object.keys(categories);
    const [selectedCategory, setSelectedCategory] = useState(categoryNames[0]);
    const [selectedQuestion, setSelectedQuestion] = useState(null);

    const handleCategoryClick = (categoryName) => {
        setSelectedCategory(categoryName);
        setSelectedQuestion(null); // Reset selected question when changing the category
    };

    const handleQuestionClick = (question) => {
        setSelectedQuestion((prevQuestion) =>
            prevQuestion === question ? null : question
        );
    };
    return (
        <>
            <section id="faq-section">
                <div className="container pt-16">
                    <h1 className="text-3xl md:text-4xl text-center font-semibold">
                        {title} <span className="text-primary">{colorTitle}</span>
                    </h1>

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-40 mt-10">
                        <div className="col-span-1 space-y-2 category">
                            <ul className="space-y-3">
                                {categoryNames.map((categoryName, index) => (
                                    <li
                                        key={index}
                                        style={{
                                            cursor: 'pointer',
                                        }}
                                        onClick={() => handleCategoryClick(categoryName)}
                                        className={selectedCategory === categoryName ? 'selected' : ''}>
                                        {categoryName}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Category Question And Answer */}
                        <div className="col-span-4">
                            {selectedCategory && (
                                <div className="accordion">
                                    {categories[selectedCategory].map((item, index) => (
                                        <div key={index} className="accordion-item">
                                            <input type="checkbox" id={`accordion${index}`}/>
                                            <label
                                                onClick={() => handleQuestionClick(item)}
                                                htmlFor={`accordion${index}`}
                                                className="accordion-item-title font-semibold"
                                            >
                                                <span className="icon"></span>
                                                {item.question}
                                            </label>
                                            <div className="accordion-item-desc">
                                                {selectedQuestion === item &&
                                                    <p className="font-[500]">{item.answer}</p>}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Faq;