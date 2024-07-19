'use client';

import React, { ReactNode, useEffect } from 'react';
import { IoClose } from 'react-icons/io5';
import { motion, AnimatePresence } from 'framer-motion';

interface ServiceModalProps {
  show: boolean;
  onClose: () => void;
  children: ReactNode;
}

const ServiceModal: React.FC<ServiceModalProps> = ({ show, onClose, children }) => {
  useEffect(() => {
    if (show) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
        >
          <motion.div
            className="relative bg-transparent p-4 sm:p-6 rounded-lg w-full max-w-4xl mx-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-1 right-3 sm:top-2 sm:right-2 md:top-4 md:right-4 text-white text-2xl sm:text-3xl z-50"
              onClick={(e) => {
                e.stopPropagation();
                onClose();
              }}
            >
              <IoClose />
            </button>
            <div className="flex justify-center items-center">{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ServiceModal;
