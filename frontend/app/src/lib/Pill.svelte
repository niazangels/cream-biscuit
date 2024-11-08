<script>
    export let text;

    const catpuccin_colors = ["#f5e0dc", "#f2cdcd", "#f5c2e7", "#cba6f7", "#f38ba8", "#eba0ac", "#fab387", "#f9e2af", "#a6e3a1", "#94e2d5", "#89dceb", "#74c7ec", "#89b4fa", "#b4befe", "#cdd6f4", "#bac2de", "#a6adc8", "#9399b2", "#7f849c", "#6c7086", "#585b70", "#45475a", "#313244", "#1e1e2e", "#181825", "#11111b"]

    const color = catpuccin_colors[Math.abs(text.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)) % catpuccin_colors.length]

    
</script>

<span class="pill" style="--color: {color}">
    {text} 
</span>

<style lang="scss">
    .pill{
        padding: 4px 8px;
        display: inline-flex;
        align-items: center;
        gap: 6px;
        background-color: hsl(from var(--color) h s max(l, 50%));
        border: 1px solid #ccc;
        border-radius: 100px;
        font-size: 1.2rem;

        &::before {
            content: '';
            width: 4px;
            height: 4px;
            border-radius: 50%;
            background-color: var(--color);
            }
    }
</style>