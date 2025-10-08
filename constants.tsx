import React from 'react';
import type { Page } from './types';
import { Home, BookText, Milestone, FileCheck2, Bot, Info, ShieldCheck, FileText, CalendarClock, Ruler, Trees } from 'lucide-react';

export interface NavItem {
  id: Page;
  label: string;
  icon: React.ReactElement;
  isDetailed?: boolean;
}

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'หน้าหลัก', icon: <Home size={20} /> },
  { id: 'terminology', label: 'คำศัพท์ที่ต้องรู้', icon: <BookText size={20} /> },
  { id: 'rationale', label: 'หลักการและเหตุผล', icon: <Info size={20} /> },
  { id: 'conditions', label: 'คุณสมบัติและเงื่อนไข', icon: <ShieldCheck size={20} /> },
  { id: 'process', label: 'ขั้นตอนการลงทะเบียน', icon: <Milestone size={20} /> },
  { id: 'form-guide', label: 'การกรอกแบบฟอร์ม', icon: <FileCheck2 size={20} /> },
  { id: 'reports', label: 'เอกสารและรายงาน', icon: <FileText size={20} /> },
  { id: 'planting-schedule', label: 'ปฏิทินการเกษตร', icon: <CalendarClock size={20} />, isDetailed: true },
  { id: 'minimum-area', label: 'เนื้อที่ขั้นต่ำ', icon: <Ruler size={20} />, isDetailed: true },
  { id: 'planting-density', label: 'อัตราการปลูกต่อไร่', icon: <Trees size={20} />, isDetailed: true },
  { id: 'assistant', label: 'ผู้ช่วยอัจฉริยะ', icon: <Bot size={20} /> },
];