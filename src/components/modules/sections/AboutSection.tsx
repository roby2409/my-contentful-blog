import { Heading, LinkTarget, Text } from '@src/components/design-system';
import React from 'react';

interface AboutSectionProps {
  short: boolean;
}

const AboutSection: React.FC<AboutSectionProps> = ({ short }) => {
  return (
    <section className="mx-auto -mt-12 mb-12 flex h-full flex-col p-4 md:-mt-0 md:p-0">
      <Heading>About 💭</Heading>
      <React.Fragment>
        <Text style={{ marginBottom: `1.5rem` }}>
          <strong>Senior iOS Engineer | Native Specialist | 6+ Years Experience</strong>
        </Text>

        <Text style={{ marginBottom: `1.5rem` }}>
          I am a Senior iOS Engineer specialized in building high-performance, scalable mobile
          applications using Native iOS (
          <LinkTarget href="https://developer.apple.com/swift/" target="_blank">
            Swift
          </LinkTarget>
          /SwiftUI). With over 6 years of experience — including 2+ years of successful remote
          collaboration as the primary iOS engineer for{' '}
          <LinkTarget href="https://langaroo.com" target="_blank">
            Langaroo
          </LinkTarget>
          , a social media platform with 500K+ downloads built around breaking language barriers
          through real-time in-chat translation.
        </Text>

        <Text style={{ marginBottom: `1.5rem` }}>
          <strong>What I Bring:</strong> Proven experience engineering real-time features (live
          streaming, live chat, auto-translation, live gifting) for high-concurrency platforms. I
          prioritize long-term stability through Clean Architecture, MVVM, and SOLID principles. I
          own the full iOS lifecycle — from Figma-based UI/UX implementation to TestFlight
          distribution and App Store publishing.
        </Text>

        <Text style={{ marginBottom: `1.5rem` }}>
          <strong>Core Stack:</strong> iOS (
          <LinkTarget href="https://developer.apple.com/swift/" target="_blank">
            Swift
          </LinkTarget>
          , SwiftUI, UIKit), Clean Architecture, REST APIs, Push Notifications (APNS), Local
          Persistence, Firebase, AWS. Beyond iOS, I have expert-level experience with{' '}
          <LinkTarget href="https://flutter.dev" target="_blank">
            Flutter
          </LinkTarget>{' '}
          (4+ years) and proficiency in{' '}
          <LinkTarget href="https://kotlinlang.org" target="_blank">
            Kotlin
          </LinkTarget>{' '}
          and{' '}
          <LinkTarget href="https://reactnative.dev" target="_blank">
            React Native
          </LinkTarget>
          . My full-stack background includes{' '}
          <LinkTarget href="https://laravel.com" target="_blank">
            Laravel
          </LinkTarget>
          ,{' '}
          <LinkTarget href="https://flask.palletsprojects.com/" target="_blank">
            Flask
          </LinkTarget>
          ,{' '}
          <LinkTarget href="https://react.dev" target="_blank">
            React
          </LinkTarget>
          , and{' '}
          <LinkTarget href="https://nextjs.org" target="_blank">
            Next.js
          </LinkTarget>
          , enabling complete mobile solutions with seamless backend integration.
        </Text>
      </React.Fragment>
      {!short && (
        <React.Fragment>
          <Text style={{ marginBottom: `1.5rem` }}>
            Currently serving as the primary iOS engineer at{' '}
            <LinkTarget href="https://langaroo.com" target="_blank">
              Langaroo
            </LinkTarget>{' '}
            (Mar 2024 - Present, Remote), where I&apos;ve owned the full development lifecycle
            across a codebase maintained and scaled for 2+ years. Delivered core features including
            live streaming with auto-translation, LangChat (real-time messaging), PinCast (media
            sharing), and rewards systems — while maintaining high crash-free rates and managing the
            complete release pipeline.
          </Text>

          <Text style={{ marginBottom: `1.5rem` }}>
            I thrive in remote-first, global product teams that value technical ownership, clear
            communication, and clean, scalable code.{' '}
            <strong>Open to international opportunities</strong> where I can leverage my expertise
            in Swift/SwiftUI to build exceptional mobile experiences.
          </Text>
        </React.Fragment>
      )}
      <Text>
        🎯 <strong>Seeking:</strong> Senior iOS Engineer roles (remote/international) •{' '}
        <strong>Available for:</strong> Full-time positions, contract work, technical collaborations
        <br />
        Let&apos;s build something amazing! 🚀 #SenioriOSDeveloper #SwiftEngineer #RemoteWork
        #OpenToWork
      </Text>
    </section>
  );
};

export default AboutSection;
