import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";
import { Switch } from "./switch";
import { Label } from "@/components/atoms/inputs/label";
import { Sun, Moon } from "lucide-react";

const meta: Meta<typeof Switch> = {
  title: "Atoms/Actions/Switch",
  component: Switch,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    disabled: {
      control: "boolean",
    },
    checked: {
      control: "boolean",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Switch>;

/**
 * The default unchecked state of the switch toggle.
 */
export const Default: Story = {
  args: {
    defaultChecked: false,
  },
};

/**
 * The checked state of the switch toggle.
 */
export const Checked: Story = {
  args: {
    defaultChecked: true,
  },
};

/**
 * The disabled state, showing visual feedback for locked interactive states.
 */
export const Disabled: Story = {
  args: {
    disabled: true,
    defaultChecked: true,
  },
};

/**
 * A standard toggle paired with a labeled input using atomic patterns.
 */
export const Labeled: Story = {
  render: () => (
    <div className="flex items-center space-x-3 p-2">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode" className="cursor-pointer">
        Airplane Mode
      </Label>
    </div>
  ),
};

/**
 * An interactive setting preference pane illustrating multiple toggles at a molecular level.
 */
export const SettingsShowcase: Story = {
  render: () => {
    // Standard typed state definition
    const [settings, setSettings] = React.useState({
      email: true,
      push: false,
      beta: true,
    });

    const handleToggle = (key: keyof typeof settings) => {
      setSettings((prev) => ({
        ...prev,
        [key]: !prev[key],
      }));
    };

    return (
      <div className="w-[350px] p-6 bg-card border border-border rounded-xl shadow-lg flex flex-col gap-6">
        <div>
          <h4 className="text-base font-semibold text-foreground">Preferences</h4>
          <p className="text-xs text-muted-foreground">Manage your alerts and integrations.</p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-1">
              <Label htmlFor="email-alerts" className="font-semibold text-foreground cursor-pointer">
                Email Alerts
              </Label>
              <span className="text-xs text-muted-foreground">Receive weekly summary reports</span>
            </div>
            <Switch
              id="email-alerts"
              checked={settings.email}
              onCheckedChange={() => handleToggle("email")}
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-1">
              <Label htmlFor="push-alerts" className="font-semibold text-foreground cursor-pointer">
                Push Notifications
              </Label>
              <span className="text-xs text-muted-foreground">Get instant notifications on your device</span>
            </div>
            <Switch
              id="push-alerts"
              checked={settings.push}
              onCheckedChange={() => handleToggle("push")}
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-1 flex-1">
              <div className="flex items-center gap-1.5">
                <Label htmlFor="beta-features" className="font-semibold text-foreground cursor-pointer">
                  Beta Access
                </Label>
                <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-[10px] font-medium bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400">
                  New
                </span>
              </div>
              <span className="text-xs text-muted-foreground">Test experimental features early</span>
            </div>
            <Switch
              id="beta-features"
              checked={settings.beta}
              onCheckedChange={() => handleToggle("beta")}
            />
          </div>
        </div>
      </div>
    );
  },
};

/**
 * An interactive theme selector illustrating micro-animations and custom styles.
 */
export const ThemeToggle: Story = {
  render: () => {
    const [darkMode, setDarkMode] = React.useState(false);

    return (
      <div className="flex items-center justify-between w-[320px] p-4 bg-slate-50 dark:bg-slate-900 border border-border rounded-xl shadow-md transition-colors duration-300">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-primary/10 text-primary">
            {darkMode ? (
              <Moon className="h-5 w-5 text-indigo-500 animate-pulse" />
            ) : (
              <Sun className="h-5 w-5 text-amber-500 animate-spin-slow" />
            )}
          </div>
          <div className="flex flex-col gap-0.5">
            <span className="text-sm font-semibold text-foreground">Dark Theme</span>
            <span className="text-xs text-muted-foreground">
              {darkMode ? "Active" : "Inactive"}
            </span>
          </div>
        </div>
        <Switch
          checked={darkMode}
          onCheckedChange={setDarkMode}
          aria-label="Toggle dark mode"
        />
      </div>
    );
  },
};
