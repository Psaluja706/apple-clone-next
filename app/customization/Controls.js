'use client';

import { motion } from 'framer-motion';

export default function Controls() {
  const controls = [
    { label: '42mm', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-sL037Cb3yVsvQ6XtiANjf31Vsgc2jHpBXg&s' },
    { label: '46mm', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-sL037Cb3yVsvQ6XtiANjf31Vsgc2jHpBXg&sg' },
    { label: 'Case', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-sL037Cb3yVsvQ6XtiANjf31Vsgc2jHpBXg&s' },
    { label: 'Band', icon: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTJ2TwK1kNXT46iNcB6U_EccEQv373KbHsNDKIz1RJuqVYw-enVI15anskmIQqkH0n6nHOYMroBQyVsO1dp4z5Gavd3JBtejYbj06YsAJn2JjkESI1ggxa9d9SnyxD5dgwY-XMnAng&usqp=CAc' },
  ];

  return (
    <div className="flex justify-center mt-10 space-x-4">
      {controls.map((control) => (
        <motion.button
          key={control.label}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="flex flex-col items-center p-4 bg-gray-100 rounded-lg hover:bg-gray-200"
        >
          <img src={control.icon} alt={control.label} className="h-6 w-6 mb-2" />
          <span className="text-sm font-medium">{control.label}</span>
        </motion.button>
      ))}
    </div>
  );
}
