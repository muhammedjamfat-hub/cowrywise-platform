"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { type User } from '@/lib/cowrywise-data';
import { LandingPage } from '@/components/app-shell';

export default function HomePage() {
  return <LandingPage />;
}
