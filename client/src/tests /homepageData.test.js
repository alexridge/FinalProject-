/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react';
import HomepageData from './homepageData';

test('use jsdom in this test file', () => {
    const element = document.createElement('div');
    expect(element).not.toBeNull();
  });
  describe('page loads', () => { 
    render(<HomepageData />)
    it("should load a loading screen", () => {
      expect(screen.include('Loading...')).toEqual(true);
  });
  });
  