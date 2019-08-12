import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { withTheme, WithTheme } from '../theme';
import { Title } from '../typography';

export interface ListItemProps {
  /** Label to be shown on the left */
  label: string;

  /** 
   * Callback to be called when the component is tapped.
   * If onPress is provided, a chevron will be rendered.
   */
  onPress?: () => void;
};

class ScoreCardListItem extends Component<WithTheme<ListItemProps>> {
  public render() {
    const { label, onPress } = this.props;

    return (
      <TouchableOpacity style={[styles.container, styles.row]} disabled={!onPress} onPress={onPress}>
        <Title style={styles.fill}>
          {label}
        </Title>
        {this.chevron()}
      </TouchableOpacity>
    );
  }

  private chevron() {
    const { onPress, theme } = this.props;

    if (onPress) {
      return (
        <Icon name={'chevron-right'} size={24} color={theme.colors.text} />
      );
    }
  }
}

/**
 * ListItem component made for use as the default actionRow of a ScoreCard
 */
export default withTheme(ScoreCardListItem);

const styles = StyleSheet.create({
  container: {
    padding: 16
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  fill: {
    flex: 1
  }
});
