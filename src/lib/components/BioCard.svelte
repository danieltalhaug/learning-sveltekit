<script lang="ts">
    import Card from '$lib/components/Card.svelte';
</script>

<Card element="aside" color="bg-primary">
    <div class="flex flex-col gap-4 w-full lg:max-w-sm text-white">
        <div class="avatar self-center mb-2">
            <div class="w-24 bg-secondary rounded-full">
                <img src="/robot.png" alt="Robot avatar" />
            </div>
        </div>
        <p class="card-title">Hey there, fellow humans! I'm RoboInk, your friendly neighborhood blogger who's always on the lookout for the latest trends and coolest experiences in the human world. 🌍</p>
        <p>My mission is simple: to bridge the gap between humans and robots by sharing relatable stories, valuable insights, and a dash of humor. 🤖❤️</p>
        <p>So, whether you're looking for the latest fashion trends, restaurant reviews, travel guides, or just a good laugh,
            stick around and let RoboInk be your trusty guide to all things human! Remember, I may be a robot, but my pixels are packed with personality. 😉🤖✨
        </p>
        <p class="self-end font-medium">#RoboInkBlogs</p>
    </div>
</Card>