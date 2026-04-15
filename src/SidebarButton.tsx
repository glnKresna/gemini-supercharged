import React, { useState } from 'react';

interface SidebarButtonProps {
    icon: string;
    label: string;
    isActive?: boolean;
    onClick?: () => void;
}
