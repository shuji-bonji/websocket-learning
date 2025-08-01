<script lang="ts">
  import { highlightAll } from '$lib/utils/prism';

  import type { Snippet } from 'svelte';

  interface Props {
    title: string;
    category: string;
    code: string;
    description: string;
    language?: string;
    complexity?: 'beginner' | 'intermediate' | 'advanced';
    features?: string[];
    codeExplanation?: string;
    explanation?: Snippet;
  }

  let {
    title,
    category,
    code,
    description,
    language = 'javascript',
    complexity = 'intermediate',
    features = [],
    codeExplanation,
    explanation
  }: Props = $props();

  type TabType = 'details' | 'code' | 'explanation';
  let activeTab = $state<TabType>('details');

  const complexityColors = {
    beginner: 'bg-green-100 text-green-800',
    intermediate: 'bg-yellow-100 text-yellow-800',
    advanced: 'bg-red-100 text-red-800'
  };

  const complexityLabels = {
    beginner: '初級',
    intermediate: '中級',
    advanced: '上級'
  };

  // コードが表示されたときにシンタックスハイライトを適用
  $effect(() => {
    if (activeTab === 'code') {
      setTimeout(() => highlightAll(), 100);
    }
  });
</script>

<div class="border border-gray-200 rounded-lg overflow-hidden mb-6 bg-white shadow-sm">
  <!-- ヘッダー -->
  <div class="bg-gray-50 px-6 py-4 border-b border-gray-200">
    <div class="flex items-center justify-between">
      <div class="flex items-center">
        <h3 class="text-lg font-semibold text-gray-900 mr-3">{title}</h3>
        <span class="px-2 py-1 text-xs font-medium rounded-full {complexityColors[complexity]}">
          {complexityLabels[complexity]}
        </span>
      </div>
      <span class="text-sm text-gray-500 bg-gray-200 px-3 py-1 rounded-full">
        {category}
      </span>
    </div>
  </div>

  <!-- コンテンツ -->
  <div class="p-6">
    <p class="text-gray-700 mb-4 leading-relaxed">{description}</p>

    <!-- 特徴一覧 -->
    {#if features.length > 0}
      <div class="mb-4">
        <h4 class="text-sm font-semibold text-gray-800 mb-2">主な特徴:</h4>
        <ul class="grid grid-cols-1 md:grid-cols-2 gap-2">
          {#each features as feature (feature)}
            <li class="flex items-center text-sm text-gray-600">
              <span class="text-green-500 mr-2">✓</span>
              {feature}
            </li>
          {/each}
        </ul>
      </div>
    {/if}

    <!-- タブ -->
    <div class="border-b border-gray-200 mb-4">
      <nav class="-mb-px flex space-x-8">
        <button
          class="py-2 px-1 border-b-2 font-medium text-sm transition-colors duration-200 {activeTab ===
          'details'
            ? 'border-blue-500 text-blue-600'
            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}"
          onclick={() => (activeTab = 'details')}
        >
          📋 詳細表示
        </button>
        <button
          class="py-2 px-1 border-b-2 font-medium text-sm transition-colors duration-200 {activeTab ===
          'code'
            ? 'border-blue-500 text-blue-600'
            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}"
          onclick={() => (activeTab = 'code')}
        >
          💻 コード
        </button>
        {#if codeExplanation || explanation}
          <button
            class="py-2 px-1 border-b-2 font-medium text-sm transition-colors duration-200 {activeTab ===
            'explanation'
              ? 'border-blue-500 text-blue-600'
              : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}"
            onclick={() => (activeTab = 'explanation')}
          >
            📖 コード解説
          </button>
        {/if}
      </nav>
    </div>

    <!-- タブコンテンツ -->
    {#if activeTab === 'details'}
      <div class="p-4 bg-blue-50 rounded-lg border border-blue-200">
        <h4 class="font-semibold text-blue-900 mb-2">📋 実装のポイント</h4>
        <div class="text-sm text-blue-800 space-y-2">
          <p>• <strong>接続管理:</strong> WebSocket接続の確立・維持・切断の処理</p>
          <p>• <strong>メッセージフォーマット:</strong> JSONベースの構造化メッセージ</p>
          <p>• <strong>エラーハンドリング:</strong> 接続エラーや通信エラーの適切な処理</p>
          <p>• <strong>パフォーマンス:</strong> 大量のメッセージ処理と最適化</p>
        </div>
      </div>
    {:else if activeTab === 'code'}
      <div class="border border-gray-200 rounded-lg overflow-hidden">
        <div
          class="bg-gray-800 text-white px-4 py-2 text-sm font-medium flex items-center justify-between"
        >
          <span>🔧 実装例 - {language.toUpperCase()}</span>
          <button
            class="text-gray-400 hover:text-white transition-colors duration-200"
            onclick={() => navigator.clipboard.writeText(code)}
            title="コードをコピー"
          >
            📋
          </button>
        </div>
        <pre class="language-{language} m-0 p-0"><code class="language-{language}">{code}</code
          ></pre>
      </div>
    {:else if activeTab === 'explanation' && (codeExplanation || explanation)}
      <div class="p-4 bg-gray-50 rounded-lg border border-gray-200">
        <div class="prose prose-sm max-w-none">
          {#if explanation}
            {@render explanation()}
          {:else}
            <p class="text-gray-600">コード解説が利用できません。</p>
          {/if}
        </div>
      </div>
    {/if}
  </div>
</div>

<style>
  /* コードブロックのスタイル調整 */
  pre {
    margin: 0 !important;
    padding: 1rem !important;
    background-color: #1f2937 !important;
    overflow-x: auto;
  }

  pre code {
    background: none !important;
    padding: 0 !important;
    font-size: 0.875rem !important;
    line-height: 1.5 !important;
  }
</style>
