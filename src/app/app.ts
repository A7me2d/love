import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly name = signal('');
  protected readonly submitted = signal(false);
  protected readonly hearts = signal<Array<{id: number, left: number, delay: number}>>([]);
  protected readonly errorMessage = signal('');
  protected readonly currentSlide = signal(0);
  private heartId = 0;
  private readonly allowedName = 'Aman-Ahmed';

  slides = [
    {
      title: '💖 Special Person',
      description: 'You are someone truly extraordinary',
      icon: '💖',
      color: 'slide-pink'
    },
    {
      title: '✨ Radiant Soul',
      description: 'Your presence lights up every room',
      icon: '✨',
      color: 'slide-gold'
    },
    {
      title: '🌹 Beautiful Heart',
      description: 'Your kindness knows no bounds',
      icon: '🌹',
      color: 'slide-rose'
    },
    {
      title: '💝 Precious Gift',
      description: 'You are a gift to this world',
      icon: '💝',
      color: 'slide-coral'
    },
    {
      title: '🌟 Shining Star',
      description: 'You make life beautiful',
      icon: '🌟',
      color: 'slide-yellow'
    },
    {
      title: '💕 Pure Love',
      description: 'Love looks absolutely good on you',
      icon: '💕',
      color: 'slide-magenta'
    }
  ];

  qualities = [
    '💖 You bring joy to every moment',
    '✨ Your smile lights up the world',
    '🌹 You are truly one of a kind',
    '💝 Your kindness knows no bounds',
    '🌟 You make life beautiful',
    '💕 Love looks good on you'
  ];

  onSubmit() {
    const trimmedName = this.name().trim();
    
    if (!trimmedName) {
      this.errorMessage.set('Please enter a name');
      return;
    }
    
    if (trimmedName !== this.allowedName) {
      this.errorMessage.set(`Only "${this.allowedName}" is allowed! 💕`);
      return;
    }
    
    this.errorMessage.set('');
    this.submitted.set(true);
    this.createHearts();
  }

  private createHearts() {
    const newHearts = [];
    for (let i = 0; i < 15; i++) {
      newHearts.push({
        id: this.heartId++,
        left: Math.random() * 100,
        delay: Math.random() * 0.5
      });
    }
    this.hearts.set(newHearts);
  }

  reset() {
    this.name.set('');
    this.submitted.set(false);
    this.hearts.set([]);
    this.currentSlide.set(0);
    this.errorMessage.set('');
  }

  nextSlide() {
    const nextIndex = (this.currentSlide() + 1) % this.slides.length;
    this.currentSlide.set(nextIndex);
  }

  prevSlide() {
    const prevIndex = this.currentSlide() === 0 ? this.slides.length - 1 : this.currentSlide() - 1;
    this.currentSlide.set(prevIndex);
  }

  goToSlide(index: number) {
    this.currentSlide.set(index);
  }
}
