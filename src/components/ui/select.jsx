import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const SelectContext = React.createContext();

export function Select({ children, value, onValueChange }) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState(value);
    const selectRef = useRef(null);

    useEffect(() => {
        setSelectedValue(value);
    }, [value]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (selectRef.current && !selectRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isOpen]);

    const handleSelect = (newValue) => {
        setSelectedValue(newValue);
        onValueChange(newValue);
        setIsOpen(false);
    };

    return (
        <SelectContext.Provider value={{ isOpen, setIsOpen, selectedValue, handleSelect }}>
            <div ref={selectRef} className="relative">
                {children}
            </div>
        </SelectContext.Provider>
    );
}

export function SelectTrigger({ className, children }) {
    const { isOpen, setIsOpen } = React.useContext(SelectContext);

    return (
        <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className={`flex items-center justify-between w-full px-4 py-2 text-sm bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors ${className || ''}`}
        >
            {children}
            <ChevronDown className={`w-4 h-4 ml-2 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </button>
    );
}

export function SelectValue({ placeholder }) {
    const { selectedValue } = React.useContext(SelectContext);
    
    // Find the label for the selected value by looking at SelectItem children
    const getLabel = () => {
        if (selectedValue === 'featured') return 'Featured';
        if (selectedValue === 'price-low') return 'Price: Low to High';
        if (selectedValue === 'price-high') return 'Price: High to Low';
        return placeholder || 'Select...';
    };

    return <span className="text-sm">{getLabel()}</span>;
}

export function SelectContent({ children }) {
    const { isOpen } = React.useContext(SelectContext);

    if (!isOpen) return null;

    return (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-md shadow-lg z-50 overflow-hidden">
            <div className="py-1">{children}</div>
        </div>
    );
}

export function SelectItem({ value, children }) {
    const { selectedValue, handleSelect } = React.useContext(SelectContext);
    const isSelected = selectedValue === value;

    return (
        <button
            type="button"
            onClick={() => handleSelect(value)}
            className={`w-full px-4 py-2 text-left text-sm hover:bg-gray-100 transition-colors ${
                isSelected ? 'bg-gray-50 font-medium' : ''
            }`}
        >
            {children}
        </button>
    );
}
