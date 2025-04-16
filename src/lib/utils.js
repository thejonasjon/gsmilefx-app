// src/utils/cn.js or src/lib/utils/cn.js
export function cn(...classes) {
    return classes.filter(Boolean).join(' ');
}