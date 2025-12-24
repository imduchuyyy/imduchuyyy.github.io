export const metadata = {
    title: "CV | imduchuyyy",
    description: "My professional experience and skills.",
};

export default function CVPage() {
    return (
        <div className="container mx-auto px-4 py-32 max-w-3xl">
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h1 className="text-4xl font-bold font-mono mb-8">Curriculum Vitae</h1>

                <div className="space-y-2">
                    <p className="text-muted-foreground">
                        Feature currently under construction.
                        <br />
                        Please check my <a href="https://linkedin.com/in/buiduchuy2412" className="text-primary hover:underline" target="_blank">LinkedIn</a> in the meantime.
                    </p>
                </div>

                {/* Placeholder for future detailed CV */}
                <div className="border border-white/10 rounded-lg p-8 bg-white/5 backdrop-blur-sm">
                    <div className="font-mono text-sm text-green-400 mb-2">root@imduchuyyy:~# cat work_experience.txt</div>
                    <div className="font-mono text-sm text-muted-foreground whitespace-pre-wrap">
                        {`Loading professional history...
[====================> ] 99%

> Software Engineer @ ...
> Blockchain Developer @ ...
> Open Source Contributor @ ...
`}
                    </div>
                </div>
            </div>
        </div>
    );
}
