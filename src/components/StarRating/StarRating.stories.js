import React from 'react';
import { action } from '@storybook/addon-actions';
import { StarRating } from '.';
import {withKnobs, text, boolean, number} from '@storybook/addon-knobs';

export default {
  title: 'StarRating',
  component: StarRating,
  decorators: [withKnobs]
};

export const StarRatingStory = () => <StarRating maxStars={number("Max Stars", 5)} rating={number("Rating", 2.5)} />;
